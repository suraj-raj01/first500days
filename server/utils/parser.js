import dayjs from 'dayjs';

export function parseChat(buffer) {
  const content = buffer.toString('utf-8');
  const lines = content.split('\n');

  const joinMap = {};
  const activeMap = {};
  const userDayMap = {};
  const allDates = [];

  // First pass → collect dates
  for (let line of lines) {
    const match = line.match(/^(\d{1,2}\/\d{1,2}\/\d{2}),/);
    if (!match) continue;

    const date = dayjs(match[1], 'MM/DD/YY').format('YYYY-MM-DD');
    allDates.push(date);
  }

  if (allDates.length === 0) {
    return { graphData: [], active4Days: [] };
  }

  const latestDate = dayjs(allDates.sort().at(-1));

  const last7Days = [...Array(7)].map((_, i) =>
    latestDate.subtract(i, 'day').format('YYYY-MM-DD')
  );

  // Second pass → parse messages
  for (let line of lines) {
    const match = line.match(
      /^(\d{1,2}\/\d{1,2}\/\d{2}),\s.*?\s-\s(.+)$/
    );
    if (!match) continue;

    const date = dayjs(match[1], 'MM/DD/YY').format('YYYY-MM-DD');
    if (!last7Days.includes(date)) continue;

    const message = match[2];

    // Joined users
    if (message.includes('joined')) {
      const user = message.split(' ')[0];
      joinMap[date] ??= new Set();
      joinMap[date].add(user);
      continue;
    }

    // Active users
    const userMatch = message.match(/^(.+?):/);
    if (!userMatch) continue;

    const user = userMatch[1].trim();

    activeMap[date] ??= new Set();
    activeMap[date].add(user);

    userDayMap[user] ??= new Set();
    userDayMap[user].add(date);
  }

  const graphData = last7Days.reverse().map(day => ({
    day,
    joined: joinMap[day]?.size || 0,
    active: activeMap[day]?.size || 0
  }));

  const active4Days = Object.entries(userDayMap)
    .filter(([_, days]) => days.size >= 4)
    .map(([user]) => user);

  return { graphData, active4Days };
}

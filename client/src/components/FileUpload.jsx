import axios from 'axios';

export default function Upload({ onResult }) {
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);


        const res = await axios.post('https://first500days.onrender.com/api/analyze', formData);
        console.log(res.data, 'data')
        onResult(res.data);
    };

    return <label id="custom-file-upload">
        Choose File
        <input type="file" accept=".txt" onChange={handleUpload} />
    </label>
}
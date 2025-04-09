import axios from "axios";

export default async function handler(req, res) {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.status(200).json({ message: response.data.message })
}
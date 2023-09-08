import axios from 'axios';

export async function GET(url) {
  try {
    const { data } = await axios.get(url)

    return data;
  } catch (error) {

  }
}
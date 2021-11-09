import axios from 'axios';

export default function searchCity(): void {
  axios.get('https://weather-app-7abe9-default-rtdb.firebaseio.com/.json')
    .then((res) => {
      const response: any = res.data;
      console.log(response)
    });
}

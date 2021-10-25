import axios from 'axios';

export default function searchCity(): void {
  axios.get('https://weather-app-7abe9-default-rtdb.firebaseio.com/.json')
    .then((res) => {
      const response:Array<Object> = res.data;
      console.log(response.filter((e:any) => (e.name === 'Hrodna') ? e : ''))
    });
}

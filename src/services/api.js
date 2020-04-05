import axios from 'axios'; 

// '/anual-result'
const anualResultChartBar = axios.create({ baseURL: 'https://private-afe609-testefront.apiary-mock.com' });

// '/anual-percentage'
const percentageResultChartPie = axios.create({ baseURL: 'https://private-afe609-testefront.apiary-mock.com' }); 

// '/time-data'
const timeResultChartLine = axios.create({ baseURL: 'https://private-afe609-testefront.apiary-mock.com' }); 

export { anualResultChartBar, percentageResultChartPie, timeResultChartLine };

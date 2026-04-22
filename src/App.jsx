
import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {

  return (
    <>
      
      <Suspense fallback={<p>Nader on the go.....</p>}>
      <Countries countriesPromise={countriesPromise}/>
      </Suspense>
          
    </>
  );
}

export default App

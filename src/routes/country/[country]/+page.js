export async function load({ params }) {
    const countryName = decodeURIComponent(params.country); // Decode the URL
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
    
    if (!response.ok) {
        throw new Error('Country not found');
    }

    const data = await response.json();
    const country = data[0]; 
    const flag = country.flags.svg; 

    return { countryName, flag };
}

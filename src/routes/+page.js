export async function load() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        const countries = data.map(country => country.name.common).sort();

        console.log("Fetched countries:", countries); // Debugging output

        return { countries }; // Make sure to return this correctly
    } catch (error) {
        console.error("Error fetching countries:", error);
        return { countries: [] }; // Return empty array to avoid crashes
    }
}

import CountryListItem from "./CountryListItem";

const VisitedCountriesList = ({visitedCountries}) => {
    return(
        <>
            <h2>All the countries I've visited!</h2>
            <ul>
                {
                    visitedCountries.map((countryName,index)=>{
                        return(
                            <li key={countryName+index}>{countryName}</li>
                        )
                    })
                }
            </ul>
            
            
        </>
    );
}

export default VisitedCountriesList;
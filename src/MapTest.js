import { STATESNAMES } from "./data.js"

export default function MapTestApp() {
    // const statesNames = [
    //     {
    //         fullStateName: "Alabama",
    //         abbrStateName: "AL"
    //     },
    //     {
    //         fullStateName: "Alaska",
    //         abbrStateName: "AK"
    //     },
    //     {
    //         fullStateName: "Arizona",
    //         abbrStateName: "AZ"
    //     },
    //     {
    //         fullStateName: "Arkansas",
    //         abbrStateName: "AR"
    //     },
    //     {
    //         fullStateName: "California",
    //         abbrStateName: "CA"
    //     },
    //     {
    //         fullStateName: "Colorado",
    //         abbrStateName: "CO"
    //     },
    //     {
    //         fullStateName: "Connecticut",
    //         abbrStateName: "CT"
    //     },
    //     {
    //         fullStateName: "Delaware",
    //         abbrStateName: "DE"
    //     },
    //     {
    //         fullStateName: "District of Columbia",
    //         abbrStateName: "DC"
    //     },
    //     {
    //         fullStateName: "Florida",
    //         abbrStateName: "FL"
    //     },
    //     {
    //         fullStateName: "Georgia",
    //         abbrStateName: "GA"
    //     }    
    // ]

    return (
        <div className="test">
            {STATESNAMES.map((stateName, index) => {
                return (
                    <div key={index}>
                    <h1>{stateName.fullStateName}</h1>
                    <h3>{stateName.abbrStateName}</h3>
                </div>
                )
            })}
        </div>
    )
}
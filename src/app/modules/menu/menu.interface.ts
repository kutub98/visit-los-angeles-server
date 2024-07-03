export interface IMenu {
    title:string,
    image:string,
    location:string,
    phone_number:number,
    description:string,
    category: "thinks_to_do" | "eat_and_drinks" | "find_event" | "Itineraries" | "where_to_stay"| "celebrate_la_heritage"| "tourist_information"| "meetings"|"about_la_tourism",
    sub_category:string,
    time_hour: string,
    metting_space:string
}
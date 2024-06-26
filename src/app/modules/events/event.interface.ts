export interface IAdditionalInfo {
    key: string;
    value: string;
}

export interface IEvents {
    title: string;
    image: string;
    location: string;
    phone_number: number;
    description: string;
    category: string;
    start_date:string,
    end_date:string,
    start_time: string;
    end_time: string;
    contact_info: string;
    additional_info: IAdditionalInfo[];
}

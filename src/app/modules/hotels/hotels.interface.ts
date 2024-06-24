export interface IAdditionalInfo {
    key: string;
    value: string;
}

export interface IHotel {
    title: string;
    image: string;
    location: string;
    phone_number: number;
    description: string;
    category: string;
    time_hour: string;
    meeting_space: string;
    additional_info: IAdditionalInfo[];
}

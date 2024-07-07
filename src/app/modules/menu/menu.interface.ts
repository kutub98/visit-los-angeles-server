export interface IAdditionalInfo {
  key: string;
  value: string;
}
export interface IMenu {
  hadline: string;
  hadline_image: string;
  short_headline: string;
  category: string;
  sub_category: string;
  category_description: string;
  category_image: string;
  sub_category_image: string;
  category_type: string;
  type_image: string;
  date_and_time: string;
  location: string;

  phone_number: number;
  time_hour: string;
  metting_space: string;
  additional_info: IAdditionalInfo[];
}


// category:
// | 'thinks_to_do'
// | 'eat_and_drinks'
// | 'find_event'
// | 'Itineraries'
// | 'where_to_stay'
// | 'celebrate_la_heritage'
// | 'tourist_information'
// | 'meetings'
// | 'about_la_tourism';

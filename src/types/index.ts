export interface EventData {
  theme: any;
  id: number;
  name: string;
  areSeatsAvailable: boolean;
  datetime: string;
  description: string;
  imgUrl: string;
  isRegistered: boolean;
  isBookmarked: boolean;
  timezone: string;
  venue: string;
}

export interface CardsProps {
  // searchKey: string;
  theme: any;
  allClicked: boolean;
  registeredClicked: boolean;
  bookMarkedClicked: boolean;
  seatsClicked: boolean;
}
export interface FilterProps {
  handleDropDown: () => void;
  dropDown: boolean;
  setSearchQuery: (value: string) => void;
}
export interface HeaderProps {
  theme: any;
}
export interface FooterProps {
  theme: any;
  reload: () => void;
}
export interface RadioButtonProps {
  allClicked: boolean;
  setAllClicked: any;
  registeredClicked: boolean;
  setRegisteredClicked: any;
  bookMarkedClicked: boolean;
  setBookMarkedClicked: any;
  seatsClicked: boolean;
  setSeatsClicked: any;
}

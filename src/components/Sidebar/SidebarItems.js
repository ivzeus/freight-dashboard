import React from "react";
import {
  Ballot as FulfillmentIcon,
  Build as BuildIcon,
  DirectionsBoat as ShipmentIcon,
  FlightTakeoff as AirShipmentIcon,
  LibraryBooks as BookingIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import Dot from "./components/Dot";

const structure = [
  {
    id: 0,
    label: "Shipments",
    link: "/app/shipments",
    icon: <ShipmentIcon />,
  },
  {
    id: 1,
    label: "Search",
    link: "app/searches",
    icon: <SearchIcon />,
  },
  {
    id: 2,
    label: "Bookings",
    link: "app/bookings",
    icon: <BookingIcon />,
  },
  {
    id: 3,
    label: "Build plans",
    link: "app/plans",
    icon: <BuildIcon />,
  },
  {
    id: 4,
    label: "Fulfillment",
    link: "app/fulfillments",
    icon: <FulfillmentIcon />,
  },
  {
    id: 5,
    label: "Air Shipments",
    link: "app/airShipments",
    icon: <AirShipmentIcon />,
  },
  //   { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  //   {
  //     id: 1,
  //     label: "Typography",
  //     link: "/app/typography",
  //     icon: <TypographyIcon />,
  //   },
  //   { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
  //   {
  //     id: 3,
  //     label: "Notifications",
  //     link: "/app/notifications",
  //     icon: <NotificationsIcon />,
  //   },
  //   {
  //     id: 4,
  //     label: "UI Elements",
  //     link: "/app/ui",
  //     icon: <UIElementsIcon />,
  //     children: [
  //       { label: "Icons", link: "/app/ui/icons" },
  //       { label: "Charts", link: "/app/ui/charts" },
  //       { label: "Maps", link: "/app/ui/maps" },
  //     ],
  //   },
  //   { id: 5, type: "divider" },
  //   { id: 6, type: "title", label: "HELP" },
  //   { id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
  //   { id: 8, label: "Support", link: "", icon: <SupportIcon /> },
  //   { id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
  //   { id: 10, type: "divider" },
  //   { id: 11, type: "title", label: "PROJECTS" },
  //   {
  //     id: 12,
  //     label: "My recent",
  //     link: "",
  //     icon: <Dot size="small" color="secondary" />,
  //   },
  //   {
  //     id: 13,
  //     label: "Starred",
  //     link: "",
  //     icon: <Dot size="small" color="primary" />,
  //   },
  //   {
  //     id: 14,
  //     label: "Background",
  //     link: "",
  //     icon: <Dot size="small" color="secondary" />,
  //   },
];

export default structure;

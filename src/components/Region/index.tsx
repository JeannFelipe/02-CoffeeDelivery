import { MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { RegionStyle } from "./styles";


export function Region(){
    return(
        <RegionStyle>
            <Link to="/checkout">
            <MapPin weight="fill" size={22}/>
            </Link>
        </RegionStyle>
    )
}
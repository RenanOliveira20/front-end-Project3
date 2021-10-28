import styled from "styled-components";
import {CgFormatJustify} from 'react-icons/cg'
import {BsBookmarkStarFill} from 'react-icons/bs'

export const ListContainer = styled.div`
    margin-top: 1%;
    height: 50px;
    width: 50%;
    margin-left: 25%;
    background-color: white;
    border-bottom: 1px solid lightgrey; 
    display: flex;
    justify-content: space-around;
    button{
        background-color: white;
        border: none;
        width: 50%;
        height: 100%;
        &:hover{
            background-color: #F8F8FF
        }
    }
`
export const FeedIcon =styled(CgFormatJustify)`
color: #dc3545;
height: 80%;
font-size: 2rem;
`
export const FavoriteIcon =styled(BsBookmarkStarFill)`
color: #dc3545;
height: 80%;
font-size: 2rem
`
import { JSX } from "react";

export enum SelectedPage{
    Home = "home",
    Benefits = "benefits",
    OUrClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface BenefitType{
    icon : JSX.Element;
    title:string;
    content:string
}

export interface ClassType{
    name:string,
    description? :string,
    image: string
}
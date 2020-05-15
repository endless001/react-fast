import * as React from "react";
import { RouteComponentProps, SwitchProps, match } from "react-router";
import { Location } from "history";

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}> extends RouteComponentProps<Params> {
    route?: RouteConfig;
}

export interface RouteConfig {
    key?: React.Key;
    location?: Location;
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType;
    path?: string | string[];
    exact?: boolean;
    strict?: boolean;
    routes?: RouteConfig[];
    render?: (props: RouteConfigComponentProps<any>) => React.ReactNode;
    [propName: string]: any;
}

export interface MatchedRoute<Params extends { [K in keyof Params]?: string }> {
    route: RouteConfig;
    match: match<Params>;
}

export function matchRoutes<Params extends { [K in keyof Params]?: string }>(routes: RouteConfig[], pathname: string): Array<MatchedRoute<Params>>;

export function renderRoutes(
    routes: RouteConfig[] | undefined,
    extraProps?: any,
    switchProps?: SwitchProps,
): JSX.Element;
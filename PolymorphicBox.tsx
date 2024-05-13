import React from 'react';

interface AsProp<C extends React.ElementType> {
    as?: C;
}

interface ForwardedProps<C extends React.ElementType> {
    className?: string;
    style?: React.CSSProperties;
    // This contains the props that are sent to the component
    // PolymorphicComponent is acting `as`. If you do not set the `as`
    // prop, then the PolymorphicComponent will have a default component
    // it renders as. This component may vary between each use of
    // PolymorphicComponent, but it is usually a div.
    asProps?: React.ComponentPropsWithoutRef<C>;
}

type PolymorphicComponentPropsWithoutRef<
    C extends React.ElementType,
    Props = unknown,
> = React.PropsWithChildren<Props & AsProp<C> & ForwardedProps<C>>;

/**
 * This type defines the props of a polymorphic component that accepts
 * a component to render `as`, a `ref`, and additional unknown props to
 * pass to the component we are rendering `as`. The props `className`
 * and `style` are forwarded to the component we are rendering `as`.
 * Any other props you want to forward must be sent through `asProps`.
 */
export type PolymorphicComponentPropsWithRef<
    C extends React.ElementType,
    Props = unknown,
> = PolymorphicComponentPropsWithoutRef<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends React.ElementType> =
    React.ComponentPropsWithRef<C>['ref'];
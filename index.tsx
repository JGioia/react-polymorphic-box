import React from "react";
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "./PolymorphicBox";

/**
 * This type represents any polymorphic component.
 *
 * DefaultType denotes what `as` will default to when not specified.
 * When this prop is not specified `as` will default to `div`.
 *
 * Note: Using forwardRef without defining the type of the component
 * will result in the component having `any` props.
 */
export type PolymorphicComponentType<
    Props = unknown,
    DefaultType extends React.ElementType = 'div',
> = <C extends React.ElementType = DefaultType>(
    props: PolymorphicComponentPropsWithRef<C, Props>,
) => React.ReactNode;

/**
 * This component takes an `as` property which specifies what element type
 * that this component should act as. For example, setting `as="button"`
 * will cause this component to render as a button. This component
 * defaults to rendering as a div. You may supply instrinic elements or
 * user defined components to the `as` property. You may optionally pass
 * a ref to be forwarded to this component. This component also passes
 * along `className`, `style`, 'ref', and the contents of `asProps` to the
 * component it is rendering `as`.
 *
 * You may also want to reference to this component when you are defining
 * the type for a new polymorphic component using ref.
 */
export const PolymorphicComponent: PolymorphicComponentType = React.forwardRef(
    <C extends React.ElementType = 'div'>(
        {
            as,
            children,
            className,
            style,
            asProps,
        }: PolymorphicComponentPropsWithRef<C>,
        ref?: PolymorphicRef<C>,
    ) => {
        const Component = as ?? 'div';
        return (
            <Component
                ref={ref}
                className={className}
                style={style}
                {...asProps}
            >
                {children}
            </Component>
        );
    },
);

/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

import * as React from "react";
import * as ReactNative from "react-native";


type RNViewStyleProp = ReactNative.StyleProp<ReactNative.ViewStyle>;
type RNTextStyleProp = ReactNative.StyleProp<ReactNative.TextStyle>;
type RNImageStyleProp = ReactNative.StyleProp<ReactNative.ImageStyle>;


export interface Testable {
  testID?: string;
}


export interface ViewContentProps extends Testable {
  style?: RNViewStyleProp;
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  children?: React.ReactElement<any>;
}


export interface StyleProviderProps extends Testable {
  style?: any;
  children?: React.ReactElement<any>;
}


export interface ArticleCardProps extends Testable {
  img?: string;
  title?: string;
  category?: string;
  author?: string;
  time?: string;
  style?: RNViewStyleProp;
  imageStyle?: RNImageStyleProp;
  categoryStyle?: RNTextStyleProp;
  titleStyle?: RNTextStyleProp;
  footerStyle?: RNTextStyleProp;
  styleContent?: RNViewStyleProp;
  activeOpacity?: number;
}


export interface AvatarProps extends Testable {
  circle?: boolean;
  rounded?: boolean;
  style?: RNViewStyleProp | RNImageStyleProp;
  isVisible?: boolean;
  width?: number;
  height?: number;
  value?: number;
}


export interface AvatarGroupProps extends Testable {
  data?: Array<AvatarProps>;
  appearance?: "stack" | "grid";
  maxCount?: number;
}


export interface BadgeProps extends Testable {
  color?: string;
  bgColor?: string;
  value?: string | number;
  size?: number;
  style?: RNViewStyleProp;
}


export interface ButtonProps extends Testable {
  title?: string;
  activeOpacity?: number;
  borderRadius?: number;
  bgColor?: string;
  titleColor?: string;
  buttonStyle?: RNViewStyleProp;
  titleStyle?: RNTextStyleProp;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
  transparent?: boolean;
  outline?: string | boolean;
  outlineWidth?: number;
  raised?: boolean;
  iconRight?: React.ReactElement<any>;
  iconLeft?: React.ReactElement<any>;
}


export interface ButtonGroupProps extends Testable {
  buttons: Array<string> | Array<{ component: React.ReactElement<any> }>;
  onPress?: Function;
  buttonStyle?: RNViewStyleProp;
  style?: RNViewStyleProp;
}


export interface CardProps extends Testable {
  style?: RNViewStyleProp;
  bordered?: boolean;
  rounded?: boolean;
  children?: React.ReactElement<any>;
}


export interface ColProps extends ViewContentProps {
  content?: "column" | "column-reverse";
}


export interface DividerProps extends Testable {
  bgColor?: string;
  style?: RNViewStyleProp;
}


export interface IconProps extends Testable {
  type?: "AntDesign" | "Ionicons" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "MaterialIcons" | "MaterialCommunityIcons" | "Octicons" | "Roboto" | "SimpleLineIcons" | "Zocial" | "Fontisto";
  ios?: string;
  android?: string;
  name: string;
}


export interface InputProps extends ReactNative.TextInputProps, Testable {
  leftIcon?: React.ReactElement<any>;
  rightIcon?: React.ReactElement<any>;
  transparent?: boolean;
  style?: RNViewStyleProp;
  error?: string;
  errorStyle?: RNTextStyleProp;
  label?: string;
  labelStyle?: RNTextStyleProp;
}


export interface ListItemProps extends Testable {
  title?: string;
  subTitle?: string;
  left?: React.ReactElement<any>;
  right?: React.ReactElement<any>;
  titleStyle?: RNTextStyleProp;
  subTitleStyle?: RNTextStyleProp;
  style?: RNViewStyleProp;
  avatar?: ReactNative.ImageSourcePropType;
  avatarStyle?: ReactNative.ImageStyle;
  border?: boolean;
  footer?: React.ReactElement<any>;
}


export interface PricingProps extends Testable {
  title?: string;
  titleColor?: string;
  price?: string | number;
  priceColor?: string;
  info?: Array<string>;
  titleStyle?: RNTextStyleProp;
  priceStyle?: RNTextStyleProp;
  borderColor?: string;
  style?: RNViewStyleProp;
  button?: Button;
}


export interface ProgressBarProps extends Testable {
  height?: number;
  borderColor?: string;
  bgColor?: string;
  borderRadius?: any;
  borderWidth?: number;
  value?: string | number;
  style?: RNViewStyleProp;
  children?: React.ReactElement<any>;
}


export interface RatingProps extends Testable {
  reviews?: Array<string>;
  size?: number;
  style?: RNViewStyleProp;
  ratingColor?: string;
  ratingBackgroundColor?: string;
  titleStyle?: RNTextStyleProp;
  iconStyle?: RNViewStyleProp;
  showTitle?: boolean;
  defaultRating?: number;
}


export interface RowProps extends ViewContentProps {
  content?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
}


export interface SegmentProps extends Testable {
  activeOpacity?: number;
  colorActive?: string;
  bgColorActive?: string;
  colorUnactive?: string;
  style?: RNViewStyleProp;
  children?: React.ReactElement<any>;
  defaultValue?: number;
}


export interface SocialIconProps extends Testable {
  type?: "github" | "facebook" | "youtube" | "instagram" | "twitter" | "pinterest" | "linkedin" | "vimeo";
  raised?: boolean;
  light?: boolean;
  style?: RNViewStyleProp;
  height?: number;
}


export interface SpinnerProps extends Testable {
  bgColor?: string;
  title?: string;
  style?: RNViewStyleProp;
  titleStyle?: RNTextStyleProp;
  spinnerStyle?: RNViewStyleProp;
}


export interface SwitchProps extends Testable {
  style?: RNViewStyleProp;
  height?: number;
  bgColor?: string;
  thumbColor?: string;
  circleStyle?: RNViewStyleProp;
}


export interface TagProps extends Testable {
  text?: string;
  style?: RNViewStyleProp;
  color?: string;
  bgColor?: string;
  iconLeft?: React.ReactElement<any>;
  iconRight?: React.ReactElement<any>;
  size?: number;
}


export interface TextProps extends Testable {
  style?: RNTextStyleProp;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  children?: string | number | React.ReactElement<any>;
  color?: string;
  bold?: boolean;
}


export interface TextareaProps extends ReactNative.TextInputProps, Testable {
  style?: RNViewStyleProp;
  height?: number;
  rounded?: boolean;
  borderColor?: string;
}


/** 
MonalisaUI.StyleProvider
*/
export class StyleProvider extends React.Component<StyleProviderProps, any> { }


/** 
MonalisaUI.ArticleCard
*/
export class ArticleCard extends React.Component<ArticleCardProps, any> { }


/** 
MonalisaUI.Avatar
*/
export class Avatar extends React.Component<AvatarProps, any> { }
/** 
MonalisaUI.AvatarGroup
*/
export class AvatarGroup extends React.Component<AvatarGroupProps, any> { }


/** 
MonalisaUI.Badge
*/
export class Badge extends React.Component<BadgeProps, any> { }


/** 
MonalisaUI.Button
*/
export class Button extends React.Component<ButtonProps, any> { }
/** 
MonalisaUI.ButtonGroup
*/
export class ButtonGroup extends React.Component<ButtonGroupProps, any> { }


/** 
MonalisaUI.Card
*/
export class Card extends React.Component<CardProps, any> { }


/** 
MonalisaUI.Col
*/
export class Col extends React.Component<ColProps, any> { }


/** 
MonalisaUI.Divider
*/
export class Divider extends React.Component<DividerProps, any> { }


/** 
MonalisaUI.Icon
*/
export class Icon extends React.Component<IconProps, any> { }


/** 
MonalisaUI.Input
*/
export class Input extends React.Component<InputProps, any> { }


/** 
MonalisaUI.ListItem
*/
export class ListItem extends React.Component<ListItemProps, any> { }


/** 
MonalisaUI.Pricing
*/
export class Pricing extends React.Component<PricingProps, any> { }


/** 
MonalisaUI.ProgressBar
*/
export class ProgressBar extends React.Component<ProgressBarProps, any> { }


/** 
MonalisaUI.Rating
*/
export class Rating extends React.Component<RatingProps, any> { }


/** 
MonalisaUI.Row
*/
export class Row extends React.Component<RowProps, any> { }


/** 
MonalisaUI.Segment
*/
export class Segment extends React.Component<SegmentProps, any> { }


/** 
MonalisaUI.SocialIcon
*/
export class SocialIcon extends React.Component<SocialIconProps, any> { }


/** 
MonalisaUI.Spinner
*/
export class Spinner extends React.Component<SpinnerProps, any> { }


/** 
MonalisaUI.Switch
*/
export class Switch extends React.Component<SwitchProps, any> { }


/** 
MonalisaUI.Tag
*/
export class Tag extends React.Component<TagProps, any> { }


/** 
MonalisaUI.Text
*/
export class Text extends React.Component<TextProps, any> { }


/** 
MonalisaUI.Textarea
*/
export class Textarea extends React.Component<TextareaProps, any> { }
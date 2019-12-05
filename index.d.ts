/**
 * @license
 * Copyright tuantvk. All Rights Reserved.
 * Licensed under the MIT License. See License in the project root for license information.
 */

declare module "monalisa-ui" {
  import * as React from "react";
  import * as ReactNative from "react-native";

  type RNViewStyleProp = ReactNative.StyleProp<ReactNative.ViewStyle>;
  type RNTextStyleProp = ReactNative.StyleProp<ReactNative.TextStyle>;
  type RNImageStyleProp = ReactNative.StyleProp<ReactNative.ImageStyle>;

  namespace MonalisaUI {

    interface Testable {
      testID?: string;
    }

    interface ViewContentProp extends Testable {
      style?: RNViewStyleProp;
      alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
      children?: React.ReactElement<any>;
    }

    interface ArticleCard extends Testable {
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
      activeOpacity?: number;
    }


    interface Avatar extends Testable {
      circle?: boolean;
      rounded?: boolean;
      style?: RNViewStyleProp | RNImageStyleProp;
      isVisible?: boolean;
      width?: number;
      height?: number;
      value?: number;
    }


    interface AvatarGroup extends Testable {
      data?: Array<Avatar>;
      appearance?: "stack" | "grid";
      maxCount?: number;
    }


    interface Badge extends Testable {
      color?: string;
      bgColor?: string;
      value?: string | number;
      size?: number;
      style?: RNViewStyleProp;
    }


    interface Button extends Testable {
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
    }


    interface ButtonGroup extends Testable {
      buttons: Array<string> | Array<{ component: React.ReactElement<any> }>;
      onPress?: Function;
      buttonStyle?: RNViewStyleProp;
      style?: RNViewStyleProp;
    }


    interface Card extends Testable {
      style?: RNViewStyleProp;
      bordered?: boolean;
      rounded?: boolean;
      children?: React.ReactElement<any>;
    }


    interface Col extends ViewContentProp {
      content?: "column" | "column-reverse";
    }


    interface Divider extends Testable {
      bgColor?: string;
      style?: RNViewStyleProp;
    }


    interface Icon extends Testable {
      type?: "AntDesign" | "Ionicons" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "MaterialIcons" | "MaterialCommunityIcons" | "Octicons" | "Roboto" | "SimpleLineIcons" | "Zocial" | "Fontisto";
      ios?: string;
      android?: string;
      name: string;
    }


    interface Input extends Testable {
      leftIcon?: React.ReactElement<any>;
      rightIcon?: React.ReactElement<any>;
      transparent?: boolean;
      style?: RNViewStyleProp;
      error?: string;
      errorStyle?: RNTextStyleProp;
      label?: string;
      labelStyle?: RNTextStyleProp;
    }


    interface ListItem extends Testable {
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
    }


    interface Pricing extends Testable {
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


    interface Rating extends Testable {
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


    interface Row extends ViewContentProp {
      content?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    }


    interface Segment extends Testable {
      activeOpacity?: number;
      colorActive?: string;
      bgColorActive?: string;
      colorUnactive?: string;
      style?: RNViewStyleProp;
      children?: React.ReactElement<any>;
      defaultValue?: number;
    }


    interface SocialIcon extends Testable {
      type?: "github" | "facebook" | "youtube" | "instagram" | "twitter" | "pinterest" | "linkedin" | "vimeo";
      raised?: boolean;
      light?: boolean;
      style?: RNViewStyleProp;
      height?: number;
    }


    interface Spinner extends Testable {
      bgColor?: string;
      title?: string;
      style?: RNViewStyleProp;
      titleStyle?: RNTextStyleProp;
      spinnerStyle?: RNViewStyleProp;
    }


    interface Switch extends Testable {
      style?: RNViewStyleProp;
      height?: number;
      bgColor?: string;
      thumbColor?: string;
      circleStyle?: RNViewStyleProp;
    }


    interface Tag extends Testable {
      text?: string;
      style?: RNViewStyleProp;
      color?: string;
      bgColor?: string;
      iconLeft?: React.ReactElement<any>;
      iconRight?: React.ReactElement<any>;
      size?: number;
    }


    interface Text extends Testable {
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


    interface Textarea extends Testable {
      style?: RNViewStyleProp;
      height?: number;
      rounded?: boolean;
      borderColor?: string;
    }
  }

}

/** 
MonalisaUI.ArticleCard
*/
export class ArticleCard extends React.Component<MonalisaUI.ArticleCard, any> { }


/** 
MonalisaUI.Avatar
*/
export class Avatar extends React.Component<MonalisaUI.Avatar, any> { }
/** 
MonalisaUI.AvatarGroup
*/
export class AvatarGroup extends React.Component<MonalisaUI.AvatarGroup, any> { }


/** 
MonalisaUI.Badge
*/
export class Badge extends React.Component<MonalisaUI.Badge, any> { }


/** 
MonalisaUI.Button
*/
export class Button extends React.Component<MonalisaUI.Button, any> { }
/** 
MonalisaUI.ButtonGroup
*/
export class ButtonGroup extends React.Component<MonalisaUI.ButtonGroup, any> { }


/** 
MonalisaUI.Card
*/
export class Card extends React.Component<MonalisaUI.Card, any> { }


/** 
MonalisaUI.Col
*/
export class Col extends React.Component<MonalisaUI.Col, any> { }


/** 
MonalisaUI.Divider
*/
export class Divider extends React.Component<MonalisaUI.Divider, any> { }


/** 
MonalisaUI.Icon
*/
export class Icon extends React.Component<MonalisaUI.Icon, any> { }


/** 
MonalisaUI.Input
*/
export class Input extends React.Component<MonalisaUI.Input, any> { }


/** 
MonalisaUI.ListItem
*/
export class ListItem extends React.Component<MonalisaUI.ListItem, any> { }


/** 
MonalisaUI.Pricing
*/
export class Pricing extends React.Component<MonalisaUI.Pricing, any> { }


/** 
MonalisaUI.Rating
*/
export class Rating extends React.Component<MonalisaUI.Rating, any> { }


/** 
MonalisaUI.Row
*/
export class Row extends React.Component<MonalisaUI.Row, any> { }


/** 
MonalisaUI.Segment
*/
export class Segment extends React.Component<MonalisaUI.Segment, any> { }


/** 
MonalisaUI.SocialIcon
*/
export class SocialIcon extends React.Component<MonalisaUI.SocialIcon, any> { }


/** 
MonalisaUI.Spinner
*/
export class Spinner extends React.Component<MonalisaUI.Spinner, any> { }


/** 
MonalisaUI.Switch
*/
export class Spinner extends React.Component<MonalisaUI.Switch, any> { }


/** 
MonalisaUI.Tag
*/
export class Tag extends React.Component<MonalisaUI.Tag, any> { }


/** 
MonalisaUI.Text
*/
export class Text extends React.Component<MonalisaUI.Text, any> { }


/** 
MonalisaUI.Textarea
*/
export class Textarea extends React.Component<MonalisaUI.Textarea, any> { }
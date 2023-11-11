import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    "backgroundColor": "#FFF",
    "display": "inline-flex",
    "paddingTop": 210,
    "paddingRight": 0,
    "paddingBottom": 214,
    "paddingLeft": 0,
    "flexDirection": "column",
    "alignItems": "center",
    "gap": 57
  },
  mainImage: {
    "width": 150,
    "height": 55
  },
  mainTextContent: {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "gap": 12,
    
  },
  mainTile:{
    "color": "#222222",
    "textAlign": "center",
    "fontSize": 24,
    "fontStyle": "normal",
    "fontWeight": "700",
    "lineHeight": 29,
  },
  mainText:{
    "color": "#717171",
    "textAlign": "center",
    "fontSize": 16,
    "fontStyle": "normal",
    "fontWeight": "400",
    "lineHeight": 24,
  },
  mainButtonContent:{
    "display": "flex",
    "width": 390,
    "paddingTop": 0,
    "paddingRight": 20,
    "paddingBottom": 0,
    "paddingLeft": 20,
    "flexDirection": "column",
    "alignItems": "center",
    "gap": 12
  },
  loginButton: {
    "display": "flex",
    "paddingTop": 14,
    "paddingRight": 0,
    "paddingBottom": 14,
    "paddingLeft": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "alignSelf": "stretch",
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "backgroundColor": "#FF5D00"
  },
  loginButtonText: {
    "color": "#FFF",
    // "fontFamily": "Pretendard Variable",
    "fontSize": 16,
    "fontStyle": "normal",
    "fontWeight": "700",
    "lineHeight": 24
  },
  signInButton:{
    "display": "flex",
    "paddingTop": 14,
    "paddingRight": 0,
    "paddingBottom": 14,
    "paddingLeft": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "alignSelf": "stretch",
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "borderWidth": 1,
    "borderColor": "#FF5D00",
    "borderStyle": "solid"
  },
  signInButtonText:{
    "color": "#FF5D00",
    "fontSize": 16,
    "fontStyle": "normal",
    "fontWeight": "700",
    "lineHeight": 24
  },
  lookAround:{
    "color": "#FF5D00",
    // "fontFamily": "Inter",
    "fontSize": 14,
    "fontStyle": "normal",
    "fontWeight": "700",
    "lineHeight": 22.4,
    "textDecorationLine": "underline"
  }
})

export default styles;
 
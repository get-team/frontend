import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#FFF',  
    alignItems: "center",
    justifyContent: "center"
  },
  containerArea: {
    "backgroundColor": "#FFF",
    "width": 390,
    "height": 844,
  },
  statusbar: {
    "display": "flex",
    "width": 390,
    "height": 47,
    "paddingTop": 0,
    "paddingRight": 16,
    "paddingBottom": 0,
    "paddingLeft": 16,
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "flexShrink": 0
  },
  header: {
    "backgroundColor": "yellow",
    "width": 390,
    "height": 74,
    "paddingTop": 16,
    "paddingRight": 16,
    "paddingBottom": 8,
    "paddingLeft": 16,
  },
  button:{
    "display": "flex",
    "width": 48,
    "height": 48,
    "justifyContent": "center",
    "alignItems": "center",
    "flexShrink": 0
  },
  loginFormContainer:{
    "backgroundColor": "red",
    "display": "inline-flex",
    "paddingTop": 0,
    "paddingRight": 16,
    "paddingBottom": 0,
    "paddingLeft": 16,
    "flexDirection": "column",
    "alignItems": "flex-start"
  },
  spacing:{
    "width": 200,
    "height": 36
  },
  loginTitle:{
    "display": "flex",
    "width": 360,
    "paddingBottom": 28,
    "flexDirection": "column",
    "alignItems": "flex-start",
  },
  loginTitleText:{
    "color": "#222",
    "fontSize": 32,
    "fontStyle": "normal",
    "fontWeight": "700",
  },
  loginTitleContentView:{
    "display": "flex",
    "paddingTop": 12,
    "justifyContent": "center",
    // "alignItems": "center",
    "alignSelf": "stretch",
    "color": "#5E5E5E"
  },
  loginTitleContent:{
    "color": "#5E5E5E",
    "fontSize": 16,
    "fontStyle": "normal",
    "fontWeight": "400",
    "lineHeight": 25.6
  },
  loginNumberContainer:{
    "backgroundColor": "yellow",
    width: 360,
    height: 56,
    gap: 16,
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "flex-start",
    "alignSelf": "stretch"
  },
  
})

export default styles;
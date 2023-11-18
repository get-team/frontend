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
  authContainer:{
    width: 358,
    height: 48,
    gap: 14,
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  authBox:{
    width: 48,
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 0,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#D84F00',
  },
  authText:{
    paddingTop:24,
    width:172,
    fontWeight: '700',
    fontSize: 14,
    color: '#FF5D00'
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
    "marginTop": 20,
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
})

export default styles;
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
  loginContent:{
    width: 360,
    height: 56,
    gap: 16,
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "flex-start",
    "alignSelf": "stretch",
    zIndex:10
  },
  phonePrefix:{
    width: 108,
    height: 56,
    gap: 6,
  },
  phoneNumber:{
    "backgroundColor": "rgb(255, 255, 255)",
    width:236,
    height:50,
    gap: 6,
    "borderTopLeftRadius": 8,
    "borderTopRightRadius": 8,
    "borderBottomRightRadius": 8,
    "borderBottomLeftRadius": 8,
    "borderTopWidth": 1,
    "borderRightWidth": 1,
    "borderBottomWidth": 1,
    "borderLeftWidth": 1,
    "paddingTop": 3,
    "paddingRight": 10,
    "paddingBottom": 3,
    "paddingLeft": 10,
    "justifyContent": "center",
  },
  gubun:{
    paddingTop: 36,
    paddingBottom: 24,
    width:360,
    height:22,
    gap:12,
    flexDirection:'row',
    "justifyContent": "center",
    "alignItems": "center",
  },
  line:{
    width:155,
    "borderWidth": 1,
    "borderColor": "#2222224D",
    "borderStyle": "solid",
  },
  lineText:{
    width:26,
    height:15,
  },
  socialContent:{
    "alignSelf": "stretch",
    gap: 16,
    paddingBottom: 16
  },
  kakaoButton:{
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
    "backgroundColor": "#FEE500",
    "flexDirection": "row",
    width: 360,
    height: 46,
  },
  kakaoText:{
    width: 115,
    height: 24,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24
  },
  naverButton:{
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
    "backgroundColor": "#1EC800",
    "flexDirection": "row",
    width: 360,
    height: 46,
  },
  naverText:{
    width: 115,
    height: 24,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF'
  },
  totalButton:{
    flexDirection:'row',
    gap: 16
  },
  halfButton:{
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
    "borderColor": "#2222224D",
    "borderStyle": "solid",
    "flexDirection": "row",
    width: 172,
    height: 46,
  },
  footer: {
    // backgroundColor:'blue',
    height: 126,
    marginTop:150,
    "justifyContent": "center",
    "alignItems": "center",
  },
  loginButton: {
    "display": "flex",
    "paddingTop": 14,
    "paddingRight": 0,
    "paddingBottom": 14,
    "paddingLeft": 0,
    "justifyContent": "center",
    "alignItems": "center",
    "borderTopLeftRadius": 100,
    "borderTopRightRadius": 100,
    "borderBottomRightRadius": 100,
    "borderBottomLeftRadius": 100,
    "backgroundColor": "#FF5D00",
    height:52,
    width:358
  },
  loginButtonText: {
    "color": "#FFF",
    "fontSize": 16,
    "fontStyle": "normal",
    "fontWeight": "700",
    "lineHeight": 24
  },
  footerText:{
    width: '100%',
    height: 28,
    paddingTop: 6,
    textAlign:'center',
    flexDirection: 'row', // 가로로 나열하도록 설정
    justifyContent: 'center', // 수평 중앙 정렬
    alignItems: 'center', // 수직 중앙 정렬
  },
  footerLine:{
    marginBottom: 14,
    height:1,
    width:'100%',
    "borderWidth": 1,
    "borderColor": "#2222224D",
    "borderStyle": "solid",
  },
  signInText:{
    fontWeight: 700,
    color: '#FF5D00',
    textAlign: 'center',
    marginLeft: 5
  }
})

export default styles;
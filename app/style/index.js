
import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import * as constant from '../util/constant';

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
export const navBarHeight = (Platform.OS == 'ios') ? constant.iosnavHeaderHeight : constant.andrnavHeaderHeight;
export const statusBarHeight = (Platform.OS == 'android') ? StatusBar.currentHeight : 25;

const styles = StyleSheet.create({
    
    routerStyle: {
        //设置router的样式
        flex: 1,
        backgroundColor: constant.mainBackgroundColor,
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    },
    navigationBar: {
        backgroundColor: constant.primaryColor,
        paddingTop: StatusBar.currentHeight,
        height: navBarHeight,
    },
    titleTextStyle: {
        color: constant.titleTextColor,
        fontSize: constant.normalTextSize,
        fontWeight: "bold"
    },
    mainBgColor: {
        backgroundColor: constant.mainBackgroundColor
    },
    mainBox: {
        backgroundColor: constant.mainBackgroundColor,
        flex: 1
    },

    centered: {
        justifyContent: "center",
        alignItems: "center"
    }
  });

  export default styles;
import React from 'react';
import {Scene, Router, Lightbox} from 'react-native-router-flux';

import WelcomePage from './component/WelcomePage';
import LoginPage from './component/LoginPage';
import styles from './style';
import * as Constants from './util/constant';
import TopicPage from './component/TopicPage';
import TabIcon from './component/widget/TabIcon';

const getRouter = () => {
    return (
        <Router getSceneStyle={()=> {
            return styles.routerStyle
        }}>
            <Lightbox>
                <Scene key='main'>
                    <Scene key='WelcomePage' component={WelcomePage} hideNavBar hideTabBar />
                </Scene>
                <Scene key='login'>
                    <Scene key='LoginPage' component={LoginPage} showLabel={false} hideNavBar />
                </Scene>
                <Scene key='root' navigationBarStyle={styles.navigationBar} titleStyle={{color: Constants.titleTextColor}}>
                    <Scene key='mainTabPage' tabs lazy wrap={false} showLabel={false} 
                            tabBarPosition={'bottom'} title={'Home'} 
                            tabBarStyle={{
                                height: Constants.tabBarHeight,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: Constants.tabBackgroundColor
                            }}>
                        <Scene key='TopicPage' component={TopicPage} icon={TabIcon} title={'主题'} tabIconName={'aperture'}/>
                    </Scene>
                </Scene>
            </Lightbox>
        </Router>
    )
}

export default getRouter;
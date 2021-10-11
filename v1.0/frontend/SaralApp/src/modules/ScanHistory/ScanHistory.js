import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//redux
import { connect } from 'react-redux';

//constant
import AppTheme from '../../utils/AppTheme';
import Strings from '../../utils/Strings';

//component
import HeaderComponent from '../common/components/HeaderComponent';
import ScanHistoryCard from './ScanHistoryCard';

const ScanHistory = ({
    loginData,
    navigation,
    roiData
}) => {

    return (
        <View style={styles.container}>
            {/* <HeaderComponent
                title={Strings.up_saralData}
                customLogoutTextStyle={{ color: AppTheme.GREY }}
                versionText={apkVersion}
            /> */}

            {
                (loginData && loginData.data)
                &&
                <View style={{ marginTop: 20 }}>
                    <Text
                        style={{ fontSize: AppTheme.FONT_SIZE_REGULAR, color: AppTheme.BLACK, fontWeight: 'bold', paddingHorizontal: '5%', paddingVertical: '2%' }}>
                        {Strings.school_name + ' Name : '}
                        <Text style={{ fontWeight: 'normal' }}>
                            {loginData.data.school.name}
                        </Text>
                    </Text>
                </View>
            }


            <View style={styles.container1}>
                <Text style={styles.header1TextStyle}>
                    {Strings.ongoing_scan}
                </Text>
            </View>
            {
                roiData.length == 0
                &&
                <Text style={{color:AppTheme.ERROR_RED,marginLeft:40,fontWeight:'bold'}}>Roi Doesn't Exist</Text>
            }

            <ScanHistoryCard
                showButtons={roiData.hasOwnProperty("data") ? true : false}
                navigation={navigation}
            />

        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        filteredData: state.filteredData,
        loginData: state.loginData,
        apiStatus: state.apiStatus,
        roiData: state.roiData.response
    }
}

export default connect(mapStateToProps, null)(ScanHistory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    container1: {
        marginHorizontal: '4%',
        alignItems: 'center',
        paddingVertical: '4%'
    },
    header1TextStyle: {
        backgroundColor: AppTheme.LIGHT_BLUE,
        lineHeight: 40,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: AppTheme.LIGHT_BLUE,
        width: '100%',
        textAlign: 'center',
        fontSize: AppTheme.FONT_SIZE_SMALL,
        color: AppTheme.BLACK,
        letterSpacing: 1
    },
});
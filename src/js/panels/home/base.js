import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {closePopout, goBack, setPage} from '../../store/router/actions';

import {Div, Panel, Group, Button, PanelHeader, PanelHeaderContent, Cell, Avatar} from "@vkontakte/vkui"

class HomePanelBase extends React.Component {

    state = {
        showImg: false
    };

    showImg = () => {
        this.setState({showImg: true});
    };


    render() {
        const {id, setPage, withoutEpic, fetchedUser, setUser} = this.props;

        return (
            <Panel id={id}>
                <PanelHeader>
                    <PanelHeaderContent status="г. Жигулевск">
                        Городские камеры
                    </PanelHeaderContent>
                </PanelHeader>
                {fetchedUser &&
                <Group title="Добро пожаловать">
                    <Cell
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}


                    </Cell>
                </Group>}
                <Group>
                    <Div>
                        <Button size="l" stretched={true} onClick={() => setPage('home', 'groups')}>Список моих
                            групп</Button>
                    </Div>
                    {withoutEpic && <Div>
                        <Button size="l" stretched={true} onClick={() => setPage('modal', 'filters')}>Открыть модальное окно</Button>
                    </Div>}
                    {this.state.showImg && <Div className="div-center">
                        <img src="https://vk.com/sticker/1-12676-256" alt="Стикер VK"/>
                    </Div>}
                </Group>
                <Group>
                    <div className="cam-contaier">

                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <p className="cam-title">Площадь мира</p>
                                    <iframe title="Площадь мира" allowFullScreen="allowfullscreen"
                                            src="https://cam.tks-net.ru/nag.omny_m54e_2812-aeebe9c095/embed.html?autoplay=false&dvr=false&token=2.hhDjiAi8ABoABZjald7mRlFCGHjArIvuULjr3-ofdxtHiDQa"></iframe>

                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <p className="cam-title">Площадь мира 2</p>
                                    <iframe title="Площадь мира 2" allowFullScreen="allowfullscreen"
                                            src="https://cam.tks-net.ru/ploshad.mira-2-e33ee19a97/embed.html?autoplay=false&dvr=false&token=2.hhDjiAi8ABoABZjald7mRmBY6sIxeSsmIW6Ods36imtDB1Dt"></iframe>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <p className="cam-title">Набережная</p>
                                    <iframe title="Набережная" allowFullScreen="allowfullscreen"
                                            src="https://cam.tks-net.ru/dahua.dh-sd59225u-hni-0001f522af/embed.html?autoplay=false&dvr=false&token=2.hhDjiAi8ABoABZjald7mRpmTTDsZMW6unMhl8B3vtR_fH3kU"></iframe>
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <p className="cam-title">Площадь победы</p>
                                    <iframe title="Площадь победы" allowFullScreen="allowfullscreen"
                                            src="https://cam.tks-net.ru/nag.omny_m54e_2812-24f0aefa23/embed.html?autoplay=false&dvr=false&token=2.hhDjiAi8ABoABZjald7mRuZBxtwxfaEZMVYThpQRyZDVGZw_"></iframe>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <p className="cam-title">Сквер В-1</p>
                                    <video id="video" width="800px" controls preload="true" autoload="false" controlsList="nodownload noremoteplayback"></video>

                                </div>
                                <div className="col-md-6 col-xs-12">


                                </div>

                            </div>
                        </div>
                    </div>


                </Group>
            </Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    closePopout,
};

HomePanelBase.propTypes = {
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    })
};



export default connect(null, mapDispatchToProps)(HomePanelBase);
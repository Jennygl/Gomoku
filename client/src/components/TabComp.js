// import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'
import AboutGomoku from './AboutGomoku'

function Tabs() {
    return (
        <>
            <div className="d-flex flex-column">
                <TabSection>
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <Button
                                class="nav-link active"
                                id="nav-timer-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-timer"
                                type="button"
                                role="tab"
                                aria-controls="nav-timer"
                                aria-selected="true"
                            >
                                Timer
                            </Button>
                            <Button
                                class="nav-link"
                                id="nav-rules-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-rules"
                                type="button"
                                role="tab"
                                aria-controls="nav-rules"
                                aria-selected="false"
                            >
                                Rules
                            </Button>
                            <Button
                                class="nav-link"
                                id="nav-gomoku-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-gomoku"
                                type="button"
                                role="tab"
                                aria-controls="nav-gomoku"
                                aria-selected="false"
                            >
                                Gomoku
                            </Button>
                            <Button
                                class="nav-link"
                                id="nav-settings-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-settings"
                                type="button"
                                role="tab"
                                aria-controls="nav-settings"
                                aria-selected="false"
                            >
                                Settings
                            </Button>
                        </div>
                    </nav>
                </TabSection>
                <TabContentSection>
                    <div class="tab-content" id="nav-tabContent">
                        <div
                            class="tab-pane fade show active"
                            id="nav-timer"
                            role="tabpanel"
                            aria-labelledby="nav-timer-tab"
                            tabindex="0"
                        >
                            Timer
                        </div>
                        <div
                            class="tab-pane fade"
                            id="nav-rules"
                            role="tabpanel"
                            aria-labelledby="nav-rules-tab"
                            tabindex="0"
                        >
                            Rules
                        </div>
                        <div
                            class="tab-pane fade"
                            id="nav-gomoku"
                            role="tabpanel"
                            aria-labelledby="nav-gomoku-tab"
                            tabindex="0"
                        >
                            <AboutGomoku />
                        </div>
                        <div
                            class="tab-pane fade"
                            id="nav-settings"
                            role="tabpanel"
                            aria-labelledby="nav-settings-tab"
                            tabindex="0"
                        >
                            Settings
                        </div>
                    </div>
                </TabContentSection>
            </div>
        </>
    )
}

export default Tabs

const Button = styled.button`
    width: 25;
    background-color: rgba(103, 160, 69, 0.46);
    border: 1px solid white;
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    display: flex;
    &.active {
        background-color: #b7b1a8;
    }
`
const TabSection = styled.div`
    width: 540px;
    /* height: 50vh; */
    display: flex;
    margin-right: 10vw;
    margin-left: auto;
`
const TabContentSection = styled.div`
    width: 540px;
    height: 50vh;
    background-color: #b7b1a8;
    border: none;
    display: flex;
    margin-right: 10vw;
    margin-left: auto;
`

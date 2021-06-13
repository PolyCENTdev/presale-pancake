import React from 'react'
import useI18n from 'hooks/useI18n'

const Footer: React.FC = () => {
    const TranslateString = useI18n()
  
    return (
        <div className="footer">
            <div>
                <div className="section1">
                    <div className="column1">
                        <strong>Servicios</strong>
                        <ul className="jss37752">
                            <li className="jss37753">
                                <a href="/farms">Farms</a>
                            </li>
                            <li className="jss37753">
                                <a href="/pools">Pools</a>
                            </li>
                        </ul>
                    </div>
                    <div className="column2">
                        <strong>PolyEarn Finance</strong>
                        <ul className="jss37752">
                            <li className="jss37753"><a href="/vision">Vision & Mission</a></li>
                            <li className="jss37753"><a href="https://polyearn.gitbook.io/polyearn/" target="_blank">Documentation</a></li>
                            <li className="jss37753"><a href="mailto:info@polyearn.com" target="_blank" rel="noopener noreferrer">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="column3">
                        <strong>Security</strong>
                        <ul className="jss37752">
                            <li className="jss37753"><a href="/audits">Audits</a></li>
                            <li className="jss37753"><a href="https://explorer-mainnet.maticvigil.com/address/" target="_blank" rel="noopener noreferrer">PEN Contract</a></li>
                        </ul>
                    </div>
                    <div className="column4">
                        <strong>Join the Community</strong>
                        <ul className="jss37752">
                            <li className="jss37753"><a href="/" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="/images/github.eb93cde4.svg" alt="" />Github</a></li>
                            <li className="jss37753"><a href="/" target="_blank" rel="noopener noreferrer" title="Medium"><img src="/images/medium.012d1912.svg" alt="" />Medium</a></li>
                            <li className="jss37753"><a href="/" target="_blank" rel="noopener noreferrer" title="Twitter"><img src="/images/twitter.94e1a815.svg" alt="" />Twitter</a></li>
                            <li className="jss37753"><a href="https://t.me/polyearn" target="_blank" rel="noopener noreferrer" title="Telegram PolyEarn"><img src="/images/telegram.dfff36b6.svg" alt="" />Telegram</a></li>
                            <li className="jss37753"><a href="https://t.me/polyearnannouncements" target="_blank" rel="noopener noreferrer" title="Telegram PolyEarn"><img src="/images/telegram.dfff36b6.svg" alt="" />Announcements</a></li>
                        </ul> 
                    </div> 
                </div>
                <div className="section2">
                © 2021. All rights reserved.
                </div>
            </div>
        </div>
    )
}
export default Footer


import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed) {
        return 'Loading ...'
    }

    return ( 
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography gutterBottom className={styles.cardTitle}>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={ confirmed.value }
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography gutterBottom className={styles.cardTitle}>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={ recovered.value }
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom className={styles.cardTitle}>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={ deaths.value }
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Cards;
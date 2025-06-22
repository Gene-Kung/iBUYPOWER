import React, { useState, useEffect } from 'react';
import { Container, Typography, Avatar, Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleOutlineIcon from '@mui/icons-material/FiberManualRecord';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";
import { bannerColor, bannerColorHover } from '../../css/themeStyles';
import { useTheme, useMediaQuery } from '@mui/material';

const About = () => {
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const [iconPosition, setIconPosition] = useState({
        bottom: 16,
        right: 200
    });

    useEffect(() => {
        let newIconPosition;
        if (matchesXS) {
            newIconPosition = { bottom: 16, right: '5vw' };
            setIconPosition(newIconPosition);
        }
        else if (matchesSM) {
            newIconPosition = { bottom: 16, right: '5vw' };
            setIconPosition(newIconPosition);
        }
        else {
            newIconPosition = { bottom: 16, right: '15vw' };
            setIconPosition(newIconPosition);
        }

    }, [])

    return (
        <>
            <Container component="main" maxWidth="md" sx={{ paddingBottom: 5 }} >
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
                            <Avatar
                                src="/logo.webp" // Change this to your image path
                                alt="logo"
                                sx={{ width: 250, height: 250 }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} paddingLeft={10}>
                        <Typography variant="h5" component="h1" style={{ textAlign: 'center' }} gutterBottom>
                            我們的故事
                        </Typography>
                        <Typography variant="body1" sx={{ textIndent: '2em' }} gutterBottom>
                            MM先生為了工作時常搬遷住所，在找尋雙北地區適合且高品質的租房環境花費許多時間與精力，但卻無從各大網站上直接看到為租屋族或無殼買房族提供完整機能的網站，心生起創建一個方便查詢各項機能及實價登錄的網站「趣找屋」。
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Typography variant="h5" component="h1" style={{ textAlign: 'center' }} gutterBottom>
                            核心理念
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            尋覓房屋的最佳夥伴，為您的租屋與買房探索之旅增添便利
                        </Typography>
                        <Typography variant="body1" sx={{ textIndent: '2em' }} gutterBottom>
                            專為您正在尋找理想住所而設計，不再需要在各大租屋網站間來回搜尋，只要輸入您欲查詢的租/買房地址，即可輕鬆查詢周邊機能和實價登錄資訊。
                            MM先生能提供給您:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="以個人喜好透過 AI 產出權重分析報表，讓您輕鬆挑選出最佳住所" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="透過房源位置即可搜尋出半徑範圍內的交通、學校、醫院等地點" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon />
                                </ListItemIcon>
                                <ListItemText primary="各種房型、價格、地點、坪數等條件與實價登錄比較算出合理價格" />
                            </ListItem>
                        </List>
                        <Typography variant="body1" sx={{ textIndent: '2em' }} gutterBottom>
                            在地圖上清晰標示所有房源周遭機能，讓您快速查看與周邊設施的遠近及相對位置，無論您是長期居住還是短期租賃，MM先生的網站都能提供最完整、最方便的資訊服務。
                            點擊輸入您感興趣的地址，開始搜尋理想住所。
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4 }}>
                            <Avatar
                                src="/use_mapmarker.jpg" // Change this to your image path
                                alt="use_mapmarker"
                                sx={{ width: 250, height: 250 }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <IconButton sx={{ position: 'fixed', zIndex: 1, right: iconPosition.right, bottom: iconPosition.bottom, backgroundColor: bannerColor, '&:hover': { backgroundColor: bannerColorHover } }}
                component={Link} to="/"
            >
                <img src='/logo.webp' lat='首頁' style={{ width: '40px' }} />
            </IconButton>
        </>
    );
};

export default React.memo(About);

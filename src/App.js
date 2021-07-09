import './App.css';
import {DatePicker, Layout} from 'antd';
import { Button, Tooltip } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons"
// import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


function App({ history }) {
  
  return (
      <Layout className="layout">
          <Layout.Header className="header"><h1>AssignMent Cover</h1></Layout.Header>
         
          <Layout.Content className="content">
              <p>
                 과제 작업날짜 :<StyledDatePicker />
              </p>
              <span style={{fontSize:'15px' , fontWeight:'bold'}}>가자 로그인페이지로!</span>
              <Tooltip title="버튼">
                <StyledButton shape="round" onClick={(e)=>history.push('/main')} icon={<PlayCircleOutlined />} />
            </Tooltip>  
          
          </Layout.Content>
          <div className="Menu">
             
        </div>
          <Layout.Footer className="footer"></Layout.Footer>
      </Layout>
  );
}
const StyledDatePicker =styled(DatePicker)`
margin-left: 10px;
`;

const StyledButton = styled(Button)`
color :blue;
margin-left: 10px;
`;


export default App;
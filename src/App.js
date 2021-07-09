import './App.css';
import {DatePicker, Layout} from 'antd';
import { Button, Tooltip } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons"
// import { withRouter } from 'react-router-dom';



function App({ history }) {
  
  return (
      <Layout className="layout">
          <Layout.Header className="header"><h1>Hello world</h1></Layout.Header>
         
          <Layout.Content className="content">
              <p>
                  <DatePicker />
              </p>
              <span>가자 로그인페이지로!</span>
              <Tooltip title="버튼">
                <Button shape="round" onClick={(e)=>history.push('/main')} icon={<PlayCircleOutlined />} />
            </Tooltip>  
          
          </Layout.Content>
          <div className="Menu">
             
        </div>
          <Layout.Footer className="footer">footer</Layout.Footer>
      </Layout>
  );
}


export default App;
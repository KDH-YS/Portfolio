import '../styles/ContentsZone.css'
import album1 from '../images/album_01.jpg'

export function ContentsZone(){
  return(
    <div id="contentsZone">
    <div class="contents_title">특별함</div>
    <div id="article" class="contents">
        <h3>사계절 낭만이 있는 곳에서 행복한 추억을 많이 만들어 가세요</h3>
        <table class="album" border={0} style={{width: '100%'}}>
            <tr>
                <td>
                    <a href="#">
                        <img src={album1} width="160" alt=""/>
                    </a>
                </td>
                <td>
                    <a href="#">
                        비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                        <div align={album1}>[<font style={{color:'#878787', fontSize:12}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787',fontSize:12}}>조회수 : 51</font>]</div>                         
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="#">
                        <img src={album1} width="160" alt=""/>
                    </a>
                </td>
                <td>
                    <a href="#">
                        비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                        <div align="right">[<font style={{color:'#878787',fontSize:12}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787',fontSize:12}}>조회수 : 51</font>]</div>                         
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    <a href="#">
                        <img src={album1} width="160" alt=""/>
                    </a>
                </td>
                <td>
                    <a href="#">
                        비가 오나 눈이 오나 걱정없는 실내 바비큐장에서 사계절 편안하게 드세요~본 내용은 샘플로 작성되었으며 추후에 관리자가 펜션에 맞게 직접 내용을 등록하실 수 있습니다.  감사합니다.                                    
                        <div align="right">[<font style={{color:'#878787',fontSize:12}}>작성일자 : 2015-12-27</font>, <font style={{color:'#878787',fontSize:12}}>조회수 : 51</font>]</div>                         
                    </a>
                </td>
            </tr>
        </table>
    </div>

</div>

  );
}
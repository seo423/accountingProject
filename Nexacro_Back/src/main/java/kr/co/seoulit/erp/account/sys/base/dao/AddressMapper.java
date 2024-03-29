package kr.co.seoulit.erp.account.sys.base.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import kr.co.seoulit.erp.account.sys.base.to.AddressBean;

@Mapper
public interface AddressMapper {
    /*public ArrayList<AddressBean> searchAddressList(String dong);*/

    public ArrayList<AddressBean> selectRoadList(String sido, String sigunguname, String roadname);

    public ArrayList<AddressBean> selectSigunguList(String parameter);

    public ArrayList<AddressBean> selectSidoList();

    public ArrayList<AddressBean> selectPostList(String dong);
}

package kr.co.seoulit.erp.account.sys.base.to;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import kr.co.seoulit.erp.account.sys.common.annotation.Dataset;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Dataset(name = "gds_menu")
@Table(name = "MENU")
@Getter @Setter@ToString
public class MenuEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    String MenuCode;
    @Column(columnDefinition = "nvarchar2")
    String MenuName;
    int MenuOrder;
    String ParentMenuCode;
    String Url;
    @Column(columnDefinition = "nvarchar2")
    String description;
    @Column(name = "WORKPLACE_CODE")
    String PositionCode;
    @Transient
    String Authority;



}

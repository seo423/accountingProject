package kr.co.seoulit.erp.account.operate.system.mapstruct;

import kr.co.seoulit.erp.account.operate.system.entity.Customer;
import kr.co.seoulit.erp.account.operate.system.to.CustomerUpdateRequest;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CustomerMapStruct {

    CustomerUpdateRequest toCustomerDTO(Customer customer);
}

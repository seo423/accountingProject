package kr.co.seoulit.erp.account.operate.system.service;


import kr.co.seoulit.erp.account.operate.system.entity.Customer;
import kr.co.seoulit.erp.account.operate.system.to.CustomerUpdateRequest;

import java.util.List;

public interface CustomerService {

    public List<Customer> findCustomerList();

    public void registerCustomer(CustomerUpdateRequest customerUpdateRequest);

    public void updateCustomer(CustomerUpdateRequest customerUpdateRequest);


    public void removeCustomer(String customerCode);
}

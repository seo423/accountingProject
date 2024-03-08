package kr.co.seoulit.erp.account.posting.ledger.repository;

import kr.co.seoulit.erp.account.posting.ledger.entity.DeptEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface DeptRepository extends CrudRepository<DeptEntity, Integer> {

}
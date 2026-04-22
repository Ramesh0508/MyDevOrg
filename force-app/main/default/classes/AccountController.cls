public with sharing class AccountController{
 @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsandContactsData() {
        List<Account> accountsWithContacts= [SELECT Id, Name, Industry,AnnualRevenue,(SELECT Id, Name, Email FROM Contacts) FROM Account LIMIT 10];
        system.debug(accountsWithContacts);
        return accountsWithContacts;
    }

  @AuraEnabled (cacheable=true)
    public static List<Contact> FetchConRec(){
        return[SELECT id,name,email,phone,title FROM Contact LIMIT 5000];
    }
   
@AuraEnabled(cacheable=true)
    public static List<Account> AccountRecords(Integer limitSize, Integer offset){
        List<Account> accountListRec = [SELECT Name, AnnualRevenue
                                     FROM Account
                                     ORDER BY CreatedDate
                                     LIMIT :limitSize
                                     OFFSET :offset
                                     ];
        return accountListRec;
    }

}

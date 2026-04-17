public with sharing class FirstApexClass {
    public List<Account> getAccounts() {
        return [SELECT Id, Name FROM Account];
    }
}
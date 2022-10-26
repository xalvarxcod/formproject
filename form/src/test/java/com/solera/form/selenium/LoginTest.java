package com.solera.form.selenium;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chromium.ChromiumDriver;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class LoginTest {

    static WebDriver driver;

    @BeforeAll
    static void setupClass(){
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://localhost:3000");
    }

    /*@BeforeEach
    void setupTest(){
        driver = new ChromeDriver();
        driver.get("http://localhost:3000");
    }*/

    @AfterAll
    static void teardown(){
        //driver.quit();
    }

    @Test
    void testLoginValidCredentials(){
        WebElement email = driver.findElement(By.cssSelector("#email"));
        email.sendKeys("solera@solera.com");

        WebElement password = driver.findElement(By.cssSelector("#password"));
        password.sendKeys("bootcamp2");

        driver.findElement(By.tagName("button")).click();

        try {
            long numMillisecondsToSleep = 3000; // 3 seconds
            Thread.sleep(numMillisecondsToSleep);
        } catch (InterruptedException e) { }

        String title = driver.findElement(By.tagName("h5")).getText();

        assertEquals("Start your blockchain form",title);
    }

    /*@Test
    void testSliderAfterLoginNumericQuestion(){
        WebElement slider = driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[1]/main[1]/div[2]/div[1]/div[1]/div[1]/div[1]"));
        try {
            long numMillisecondsToSleep = 3000; // 3 seconds
            Thread.sleep(numMillisecondsToSleep);
        } catch (InterruptedException e) { }
        for(int i = 1; i <= 10; i++){
            slider.sendKeys(Keys.ARROW_RIGHT);
            try {
                long numMillisecondsToSleep = 2000; // 3 seconds
                Thread.sleep(numMillisecondsToSleep);
            } catch (InterruptedException e) { }
        }
    }*/


}

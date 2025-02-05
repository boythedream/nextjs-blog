---
title: Java Tutorial in Urdu
description: This is a comprehensive Java tutorial designed for Urdu speakers.
date: 21/10/2024
author: Raza
image: /python.webp
slug: java-tutorial-urdu
---

### Java Tutorial in Urdu

# Introduction

Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications, mobile applications, and web applications. In this tutorial, we will explore the fundamental concepts of Java in Urdu, making it accessible for Urdu-speaking learners.

## What is Java?

Java is a programming language and computing platform first released by Sun Microsystems in 1995. It is designed to be platform-independent at both the source and binary levels, which means Java programs can run on any device that has a Java Virtual Machine (JVM).

## Why Learn Java?

1. **Platform Independence**: Write once, run anywhere. Java code can run on any device that has a JVM.
2. **Strong Community**: Java has a vast community and a wealth of libraries and frameworks.
3. **Enterprise Applications**: Java is a popular choice for building large-scale enterprise applications.
4. **Job Opportunities**: Java developers are consistently in demand, particularly in enterprise-level environments.

## Getting Started

To start your journey with Java, you need to set up your development environment:

- **Java Development Kit (JDK)**: Download and install the JDK from the official [Oracle website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- **Text Editor**: Choose a text editor or IDE, such as IntelliJ IDEA, Eclipse, or NetBeans.

### Writing Your First Java Program

Let's create a simple Java program. Open your text editor and create a new file named `HelloWorld.java`. Add the following code:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Compile the program using the command:

```bash
javac HelloWorld.java
```

Run the program using the command:

```bash
java HelloWorld
```

You should see the output:

```
Hello, World!
```

---

## Java Basics

### Variables

Variables are used to store data in a Java program. Java is a strongly-typed language, which means every variable must have a data type. Common data types include:

1. **Primitive Types**:

   - `int` (integer values)
   - `double` (floating-point numbers)
   - `char` (single characters)
   - `boolean` (true/false values)

2. **Reference Types**:
   - Objects and arrays.

#### Example:

```java
int age = 25;
double salary = 50000.75;
char grade = 'A';
boolean isEmployed = true;
```

### Data Types and Operators

- Arithmetic Operators: `+`, `-`, `*`, `/`, `%`
- Relational Operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Logical Operators: `&&`, `||`, `!`

### Input and Output

#### Example:

```java
import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Hello, " + name);
    }
}
```

---

## Object-Oriented Programming (OOP) Concepts

Java is an object-oriented language, which means it uses objects to represent real-world entities. Key concepts include:

### 1. Classes and Objects

A **class** is a blueprint for creating objects. An **object** is an instance of a class.

#### Example:

```java
class Car {
    String brand;
    int speed;

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.brand = "Toyota";
        car.speed = 120;
        car.displayInfo();
    }
}
```

### 2. Inheritance

Inheritance allows a class to inherit properties and methods from another class.

#### Example:

```java
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}
```

### 3. Polymorphism

Polymorphism allows methods to perform different tasks based on the object that calls them.

#### Example:

```java
class Shape {
    void draw() {
        System.out.println("Drawing a shape.");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape = new Circle();
        shape.draw();
    }
}
```

### 4. Encapsulation

Encapsulation involves bundling data and methods that operate on the data within a single unit.

#### Example:

```java
class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("Ali");
        System.out.println(person.getName());
    }
}
```

---

## Advanced Topics

### 1. Exception Handling

Java uses try-catch blocks to handle exceptions.

#### Example:

```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int divide = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero.");
        }
    }
}
```

### 2. Generics

Generics allow you to create classes, interfaces, and methods that operate on typed objects.

#### Example:

```java
import java.util.ArrayList;

public class GenericsExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Hello");
        list.add("World");

        for (String item : list) {
            System.out.println(item);
        }
    }
}
```

### 3. Multithreading

Java supports multithreading for concurrent execution of code.

#### Example:

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running.");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

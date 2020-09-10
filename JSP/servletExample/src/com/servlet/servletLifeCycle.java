package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class servletLifeCycle
 */
@WebServlet("/servletLifeCycle")
public class servletLifeCycle extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@PostConstruct
	public void postConstruct() {
		System.out.println("-- postConstruct --");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("-- doGet --");
		
		PrintWriter pw = response.getWriter();
		pw.print("<body>");
		pw.print("servlet life cycle example");
		pw.print("</body>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("-- doPost --");
		doGet(request, response);
	}

	@Override
	public void init() throws ServletException {
		System.out.println("-- init --");
	}

	@Override
	public void destroy() {
		System.out.println("-- destroy --");
	}


	@PreDestroy
	public void preDestroy() {
		System.out.println("-- preDestroy --");
	}

}

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%-- 	<%
		Cookie[] cookies = request.getCookies();
	for(Cookie c : cookies) {
		if(c.getName().equals("memberID")) {
			//out.print(c.getName()+"<br>");
			out.print(c.getValue()+"님 환영합니다."+"<br>");
			
		}
	}
	%> --%>
	
	<%
		session = request.getSession();
		out.print(session.getAttribute("memberID")+"님 환영합니다."+"<br>");
	
	%>
	
	<form action = "Logout" method = "post">
		<input type = "submit" value = "logout"></input><br>
	</form>
</body>
</html>
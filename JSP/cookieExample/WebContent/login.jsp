<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<!-- 

	Cookie[] cookies = request.getCookies();

			if (cookies != null) {
				for (Cookie c : cookies) {
					if (c.getName().equals("memberID")) {
						response.sendRedirect("loginOk.jsp");

					}
				}
			}	}
	%>
-->

	<%
		if (session.getAttribute("memberID") != null) {
			response.sendRedirect("loginOk.jsp");
		}
	%>
	<form action="LoginCon" method="post">
		ID : <input type="text" name="mID"></input><br> <br> PW : <input
			type="password" name="mPW"></input><br> <br> <input
			type="submit" value="login"></input><br>
	</form>



</body>
</html>